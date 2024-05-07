const process = require("process");
const fs = require("fs");
const yargs = require("yargs");
const { GoogleAuth } = require("google-auth-library");

const slicedArgs = process.argv.slice(2);
const argv = yargs(slicedArgs)
  .option("target_audience", {
    demandOption: true,
    description:
      "The url or target audience to obtain the ID token for. IAP_CLIENT_ID.apps.googleusercontent.com",
    type: "string",
  })
  .option("json_credentials_path", {
    type: "string",
    description:
      "Path to the json credential file for the service account, instead of GOOGLE_APPLICATION_CREDENTIALS environment variable.",
  })
  .help().argv;

/**
 * obtaining an oidc token for service account.
 * @see https://cloud.google.com/iap/docs/authentication-howto?hl=ja#obtaining_an_oidc_token_for_the_default_service_account
 * @see https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/idTokenFromServiceAccount.js
 */
async function getIdTokenByServiceAccount(targetAudience, jsonCredentialsPath) {
  const credentials = jsonCredentialsPath
    ? JSON.parse(fs.readFileSync(jsonCredentialsPath, "utf8"))
    : undefined;
  const auth = new GoogleAuth({ credentials });
  const client = await auth.getIdTokenClient(process.env.TARGET_AUDIENCE);
  return client.idTokenProvider.fetchIdToken(targetAudience);
}

getIdTokenByServiceAccount(argv.target_audience, argv.json_credentials_path).then(
  (token) => console.log(token)
);

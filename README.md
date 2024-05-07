# README

Obtaining an OIDC token for the service account against the GCP Cloud IAP.

* https://cloud.google.com/iap/docs/authentication-howto?hl=ja#obtaining_an_oidc_token_for_the_default_service_account
* https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/idTokenFromServiceAccount.js

## Usage

```bash
npx print-iap-oidc-token \
--target_audience IAP_CLIENT_ID.apps.googleusercontent.com \
--json_credentials_path ~/.gcp/your_credentials.json
# id token printed
```

## Advanced

```bash
curl https://some.iap.url -H "Proxy-Authorization: Bearer $(npx print-iap-oidc-token --target_audience IAP_CLIENT_ID.apps.googleusercontent.com --json_credentials_path ~/.gcp/your_credentials.json)"
```

```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.gcp/your_credentials.json curl https://some.iap.url -H "Proxy-Authorization: Bearer $(npx print-iap-oidc-token --target_audience IAP_CLIENT_ID.apps.googleusercontent.com)"
```

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

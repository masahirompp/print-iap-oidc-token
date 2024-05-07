# README

## Usage

<code>
npx print-iap-oidc-token --target_audience IAP_CLIENT_ID.apps.googleusercontent.com --json_credentials_path ~/.gcp/your_credentials.json
# id token printed
</code>

## Advanced

```
curl https://some.iap.url -H "Proxy-Authorization: Bearer $(npx print-iap-oidc-token --target_audience IAP_CLIENT_ID.apps.googleusercontent.com --json_credentials_path ~/.gcp/your_credentials.json)"
```

```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.gcp/your_credentials.json curl https://some.iap.url -H "Proxy-Authorization: Bearer $(npx print-iap-oidc-token --target_audience IAP_CLIENT_ID.apps.googleusercontent.com)"
```

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

<style>
pre {white-space: wrap !important}
</style>

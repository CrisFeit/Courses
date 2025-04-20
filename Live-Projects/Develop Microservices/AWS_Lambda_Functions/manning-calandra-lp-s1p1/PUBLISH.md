Steps needed to build and publish applications into SAR:

```
sam build
sam package --template-file template.yml --output-template-file packaged.yaml --s3-bucket aws-sam-cli-managed-default-samclisourcebucket-bg8jw08e6fi0 --profile personale
sam publish --template packaged.yaml --region eu-west-2 --profile personale
```
# mailer.yaml

**Path**: `config\packages\mailer.yaml`

## Summary
This configuration file sets up Symfony's mailer component by defining the Data Source Name (DSN) for email delivery. The DSN is loaded from an environment variable `MAILER_DSN`, which specifies the mail transport method (SMTP, sendmail, third-party service, etc.) and connection details. This allows the application to send emails while keeping sensitive mail server credentials and configuration outside of version control.


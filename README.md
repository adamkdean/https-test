# HTTPS

Testing HTTPS.

## Test cerificate

    # generate private key
    openssl genrsa -des3 -out server.key 1024

    # generate cert signing request
    openssl req -new -key server.key -out server.csr

    # backup private key and then remove passphrase
    cp server.key server.key.orig
    openssl rsa -in server.key -out server.key

    # generate self sign certificate
    openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

Source: http://www.akadia.com/services/ssh_test_certificate.html

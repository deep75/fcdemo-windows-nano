Exemple de fournisseur de services avec FranceConnect
==========================

## Variables d'environnement obligatoires

Les secrets ne sont plus versionnés dans le dépôt. Avant de lancer l'application, définir :

- `SESSION_SECRET`
- `FC_CLIENT_ID`
- `FC_CLIENT_SECRET`

Variables optionnelles de configuration (URLs/callback) :

- `FC_URL`
- `FC_CALLBACK_URL`
- `FC_AUTHORIZATION_URL`
- `FC_TOKEN_URL`
- `FC_USERINFO_URL`
- `FC_LOGOUT_URL`
- `FC_ISSUER`
- `FC_ACR_VALUES`
- `OAUTH_AUTHORIZATION_URL`
- `OAUTH_TOKEN_URL`
- `OAUTH_CALLBACK_URL`
- `QUOTIENT_FAMILIAL_URL`

## Note dépendance

`request` est conservé pour compatibilité avec le code historique, mais la librairie est dépréciée en amont.

Avec Docker, lancez par exemple la commande suivante dans une instance Windows Server 2016 / Windows 10 / Windows Nano Server avec le moteur Docker for Windows Containers préinstallé :

```
docker run -d -p 80:3001 --name franceconnect-demo --network=nat mcas/franceconnect-demo-windows:latest
```

Exemples de fournisseurs de services pour France-connect :
- 1 exemple en NodeJS avec la librairie Passport

Exemples fournis par des partenaires : 
- [http://gitlab.laposte.io/rmagnac/france-connect-workshop/] (http://gitlab.laposte.io/rmagnac/france-connect-workshop/) : exemple en Ruby, sans librairie
- [https://github.com/Lyon-Metropole/poc-france-connect/] (https://github.com/Lyon-Metropole/poc-france-connect) : exemple en Ruby / Sinatra / Omniauth et OpenID
- [https://adullact.net/scm/viewvc.php/?root=hackathon-fc] (https://adullact.net/scm/viewvc.php/?root=hackathon-fc) : exemple en PHP
- [https://github.com/florent-andre/franceconnecthelper] (https://github.com/florent-andre/franceconnecthelper) : exemple en Java avec la librairie Apache Oltu
- [https://github.com/astik/poc-franceconnect] (https://github.com/astik/poc-franceconnect) : nouvel exemple en Java, toujours avec Oltu, réalisé lors du workshop du 20 Janvier 2016. Ce nouvel exemple se base sur celui de Florent Andre, et inclut, en plus, la déconnexion

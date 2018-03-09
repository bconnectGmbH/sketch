```
  _____________  __._______________________________   ___ ___
 /   _____/    |/ _|\_   _____/\__    ___/\_   ___ \ /   |   \
 \_____  \|      <   |    __)_   |    |   /    \  \//    ~    \
 /        \    |  \  |        \  |    |   \     \___\    Y    /
/_______  /____|__ \/_______  /  |____|    \______  /\___|_  /
        \/        \/        \/                    \/       \/
```

# Generate a subtheme

```
drupal sketch:generate
```

# Update a subtheme

```
drupal sketch:update <theme_name>
```

# Drupal console problems with theme commands

Add in your composer file under ```extras```

```json

  {
    "patches": {
      "drupal/core": {
        "Fix servcice theme detection": "https://www.drupal.org/files/issues/d8-2002606.patch"
      }
    },
  }

```
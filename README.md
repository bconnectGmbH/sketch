```
   _____ _        _       _     
  / ____| |      | |     | |    
 | (___ | | _____| |_ ___| |__  
  \___ \| |/ / _ \ __/ __| '_ \ 
  ____) |   <  __/ || (__| | | |
 |_____/|_|\_\___|\__\___|_| |_|
                                                            
```

# Generate a subtheme

```
drupal sketch:generate
```

# Update a subtheme

```
drupal sketch:update <theme_name>
```
<<<<<<< HEAD

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
=======
>>>>>>> 1588150f48106076b0373a5461b8fda79a5f9ffa

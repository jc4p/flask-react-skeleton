<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>flask-react-skeleton</title>
  </head>
  <body>
    <div id="root">
      <!-- React bundle will replace contents of this div -->
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  </body>

  <script>
    (function() {
      const script = document.createElement('script');
      script.src = {% if PROD %}{{ url_for('static', filename='bundle.js') }}{% else %}'http://localhost:9000/dist/bundle.js'{% endif %};
      document.write(script.outerHTML);
    }());
  </script>
</html>

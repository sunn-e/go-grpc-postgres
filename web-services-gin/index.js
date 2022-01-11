var apiBenchmark = require("api-benchmark");

var services = {
  GoService: "http://127.0.0.1:8080/",
  PythonService: "http://127.0.0.1:8000/",
};

var routes = { route1: "albums" };

apiBenchmark.compare(services, routes, function (err, results) {
  console.log(
    "go:" + results.GoService.route1.stats.mean,
    "python:" + results.PythonService.route1.stats.mean
  );
  // displays some stats, including the winner!
});

// var service = {
//   GoService: "localhost:8080/",
//   // PythonService: "http://127.0.0.1:8000/",
// };

// apiBenchmark.measure(service, routes, function (err, results) {
//   apiBenchmark.getHtml(results, function (error, html) {
//     console.log(html);
//     // now save it yourself to a file and enjoy
//   });
// });

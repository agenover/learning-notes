metrics-logger.js in jigsaw repo: where metrics are defined

we define and populate

## Type of metrics:

**counter**: it counts, always goes up, never goes down. ie. To count errors

**summary and histogram**: good to track latency, time it takes to satisfy a request

**gauge**: like velocimeter of a car, temperature, it's always a number. ie. Use to track CPU usage


Prometheus learn!

	JIGSAW outupts the values and Prometheus makes sense of the values and outputs them in Grafana
	How prometheus consums jigsaw data?
	jigsaw.integration.service.dun.fh/metrics -> to see all metrics

Grafana is dumb as jigsaw

LEARN HOW TO MAKE GOOD QUERIES --> [promql language](https://prometheus.io/docs/prometheus/latest/querying/basics/)

----------

play with the panel values in Grafana

read titles

[Link](https://web.microsoftstream.com/video/b7951ab4-3f53-40b3-846d-5346e35d4faf) to Friday Demos explanation to critical incident management (from 14.10)

# to do: take notes from video

# **Scaling services**

![scaling-services](../media/scaling-services.png)

Board from [Miro](https://miro.com/app/board/uXjVPU_H9Cw=/)

Graylog for [scalability](http://graylog.dun.fh:9000/search)

---

# **OBSERVABILITY: Graylog**


Link to [documentation](https://docs.graylog.org/)

You can apply the filters you want to as well as predetermined ones.

<br />

## **1. Search tab: CUSTOMISED FILTER**

There are other services than Jigsaw other Titan sending information to it.

To add a filter shortcut open an error and hover over value + left click + select "Add to query"


### **Level filter**

It helps finding things

If the value is <= 3 it is an error message

If the value is > 4 it is random messages, not as important as errors

### **Pathname filter**

When applying the pathname filter: `\/` is the same as `/`

<br />

## **2. Search tab: PREDETERMINED FILTER**

At the moment I can start using

- Jigsaw Errors
- Titan Client Crashes

<br />

## **3. Logger**

- Creates errors to appear in Graylog
- Classification:
  - 3 and below --> serious error
  - 4 and above --> not so serious

---

<br />
<br />

# **METRICS**

Throug metrics and its observalibility we know:

- If something is broken;
- How something is working right now;

**We usually want to find out something is not working before the client tells us**

Grafana for [observability](http://grafana-internal.integration.service.dun.fh/?orgId=1)

- RED = Request, Error, Durability
- SPROC = Storage Procedure
  - It is a function inside the database
  - We are currently migrating them inside Jigsaw because it is difficult to create tests for them and they are overcomplicated
  - Currently there are no metrics to know the requests done to SPROCS

---

<br />
<br />

# **Where do all our alerts come from?**

[Link](https://discourse.findmypast.com/t/where-do-all-our-alerts-come-from/696) to Discourse article.

---

<br />
<br />

# **Alerting with Prometheus Alertmanager**

[Link](https://github.com/findmypast/guides/blob/master/infrastructure/alerting/alerting-with-prometheus.md) to guide.

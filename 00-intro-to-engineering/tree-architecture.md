# Links

[Here](https://miro.com/app/board/uXjVOpUH81A=/) to access tree architecture explained in Miro

[Here](https://miro.com/app/board/uXjVPU_H9Cw=/) to access notes in Miro of simple tree architecture explained by Harlei

---

# Notes

### Titan

- New react front-end. Some of the features we own: jigsaw-tree, add to tree from transcript, add to tree from tree node, tree onboarding). Repo name: "titan";
- Represents the website (mainly in REACT, some parts in Angular);
- Only frontend;
- Some parts in React and some other in Angular, hence the [browser](#browser) difference;
- Titan talks to Titan Marshal, who talks to 

### Titan Marshal

- fmp-tree package with custom resolvers. And data sources: relation data source, Jigsaw data source, asset data source, tree data source, legacy source)
- Uses Node;
- Gets the data from Jigsaw requested by Titan and gives it back to Titan;

### Jigsaw

- newer service that aims to be the single entry point into Relation DB. We are currently getting rid of the SPROC layer used by it

### Tree UI

- Angular front-end: (profile page, pedigree view, facts, places, sources, ...).
- Repo name: "tree-ui"

### FMP

- Legacy monolith app that handles some routes in the front-end. Might do more than that?
DO NOT TOUCH

---
# Browser

### Integration Browser

- Using Angular --> integration.tree.findmypast.co.uk

- Using React --> integration.findmypast.co.uk

### Production Browser

- Using Angular --> tree.findmypast.co.uk

- Using React --> findmypast.co.uk

---

# Simple tree architecture

![tree architecture](../media/simple-tree-architecture.png)


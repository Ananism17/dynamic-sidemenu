const data = [
  {
    id: 1,
    parent_id: null,
    name: "Admin",
  },
  {
    id: 2,
    parent_id: 1,
    name: "Create",
  },
  {
    id: 3,
    parent_id: 1,
    name: "Delete",
  },
  {
    id: 4,
    parent_id: null,
    name: "Product",
  },
  {
    id: 5,
    parent_id: 4,
    name: "Finished Good",
  },
  {
    id: 6,
    parent_id: 4,
    name: "Raw Material",
  },
  {
    id: 7,
    parent_id: 6,
    name: "Create",
  },
  {
    id: 8,
    parent_id: 6,
    name: "List",
  },
  {
    id: 9,
    parent_id: 6,
    name: "Report",
  },
  {
    id: 10,
    parent_id: 5,
    name: "Create",
  },
  {
    id: 11,
    parent_id: null,
    name: "Random",
  },
];

export default data;

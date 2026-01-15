function joinListObject(list) {
  if (list) {
    return list.map((item) => (item.name)).join(", ");
  } else {
    return;
  }
}

export default joinListObject;

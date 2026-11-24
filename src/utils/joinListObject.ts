function joinListObject(list: any[]) {
  if (list) {
    return list.map((item) => (item.name)).join(", ");
  } else {
    return;
  }
}

export default joinListObject;

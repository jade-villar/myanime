function joinList(list) {
  if (list) {
    return list.map((item) => item).join(", ");
  } else {
    return;
  }
}

export default joinList;

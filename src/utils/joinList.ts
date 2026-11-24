function joinList(list: string[]) {
  if (list) {
    return list.map((item) => item).join(", ");
  } else {
    return;
  }
}

export default joinList;

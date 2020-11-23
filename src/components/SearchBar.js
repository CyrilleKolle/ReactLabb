import React from "react";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <input
      style={styles.inputStyle}
      placeholder="search"
      value={term}
      onChangeText={(newTerm) => onTermChange(newTerm)}
      onEndEditing={onTermSubmit}
    />
  );
};
const styles = {
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  background: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
};

export default SearchBar;

const mongoose = require("mongoose");

const Checkbox = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  const Tool = mongoose.model("Tool", Checkbox);

  module.exports = Tool;

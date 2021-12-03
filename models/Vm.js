const mongoose = require("mongoose");

const schemaVM = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },
    nom: String,
    ipAddress: String,
    systemExploitation: String,
    etat: {type: Boolean, default: false},
  }
)

const modelVM = mongoose.model('MachineVirtuelle', schemaVM);

module.exports = modelVM;

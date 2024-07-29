const mongoose = require("mongoose");

const roundOneSchema = mongoose.Schema(
  {
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teams",
    },

    mapChoice: {
      type: Number,
    },

    finalMapChoice: {
      type: Number,
    },

    roundOneScore: {
      type: Number,
    },

    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
  },

  { collection: "RoundOneModel" }
);

module.exports = mongoose.model("RoundOneModel", roundOneSchema);

const userRouteTest = async (req, res) => {
  try {
    return res.status(200).json({
      message: "User Route Test",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};

module.exports = {
  userRouteTest,
};

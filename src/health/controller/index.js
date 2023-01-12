module.exports.getStatus = async (res) => {
  res.status(200).json({
    status: 'All systems operational',
    status_color: 'green',
  });
};

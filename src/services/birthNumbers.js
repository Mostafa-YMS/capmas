const request = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { birth: "10,918", death: "20", editRequests: "400" } });
    }, 1300);
  });
};

export const getBirthNumbersService = async ({
  startDate,
  endDate,
  birthType,
}) => {
  try {
    const { data } = await request({
      params: {
        startDate,
        endDate,
        birthType,
      },
    });

    return data;
  } catch (error) {
    return { error };
  }
};

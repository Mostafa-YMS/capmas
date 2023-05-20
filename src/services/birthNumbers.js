const request = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          birth: "10,918",
          death: "20",
          editRequests: "400",
          birthPercentage: {
            male: 12,
            female: 88,
            maleColor: "#02a0fc",
            femaleColor: "#e85099",
          },
          deathPercentage: {
            male: 12,
            female: 88,
            maleColor: "#7d7d94",
            femaleColor: "#7d7d94",
          },
        },
      });
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

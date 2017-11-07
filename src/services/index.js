let GetSassExportResult = async (scss) => {
  // eslint-disable-next-line
  let apiServer= process.env.NODE_ENV === 'development' ? 'http://localhost:5000': '';

  const seviceUrl = `${apiServer}/getSassJson`;

  // eslint-disable-next-line
  console.log(process.env.NODE_ENV);

  let response = await fetch(seviceUrl, {
    method: "POST",
    body: scss
  });

  let json = response.json();

  return json;
};

export {
  GetSassExportResult
};

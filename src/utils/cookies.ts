export const setCookie = (
  name: string,
  value: string,
  expiration: string,
): void => {
  const cookieString = `${name}=${value}; expires=${expiration}`;
  document.cookie = cookieString;
};

export const getCookie = (
  cookies: string,
  name: string,
): string | undefined => {
  const result = cookies
    .split(';')
    .find((item) => item.includes(`${name}=`))
    ?.split('=')[1];
  return result;
};

export const deleteCookie = (name: string): void => {
  const deletedCookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  document.cookie = deletedCookie;
};

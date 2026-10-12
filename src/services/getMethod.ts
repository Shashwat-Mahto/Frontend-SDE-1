type getMethodType = {
  url: string;
  params?: any;
};

type responseObjType = {
  response: unknown | null;
  error: unknown | null;
};

async function getMethod({
  url,
  params = {},
}: getMethodType): Promise<responseObjType> {
  try {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `${url}?${query}` : url


    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result:unknown = await response.json();
    return {response:result , error:null}
  } catch (error:unknown) {
    return {response: null , error}
  }
 
}

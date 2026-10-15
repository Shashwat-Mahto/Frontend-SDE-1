import { useCallback, useEffect, useState } from "react";
import Accordion from "../components/Accordion/Accordion.tsx";
import getMethod from "../services/getMethod.ts";

const ENDPOINT = "https://api.jsonbin.io/v3/b/6acf3c61ac6210605a301bf0/";

export type AccordionDataType = {
  id: number;
  title: string;
  body: string;
};

function AccordionPage() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [data, setData] = useState<AccordionDataType[]>([]);

  const serializer = (item: any) => {
    return {
      id: item?.id,
      title: item?.question ?? "",
      body: item?.answer ?? "",
    };
  };
  const fetchData = async () => {
    const { response, error }: any = await getMethod({ url: ENDPOINT });

    if (response) {
      const serializedData = response?.record?.data?.map(serializer);
      setData(serializedData);
    } else {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleItemClick = useCallback((index: number) => {
    setActiveIndex((prev) => prev === index ? -1 : index);
  }, []);
  return (
    <Accordion
      activeIndex={activeIndex}
      handleItemClick={handleItemClick}
      data={data}
    />
  );
}

export default AccordionPage;

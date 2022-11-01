import { api } from "../services/api";
import { Home } from "../templates/Home/home";

type PoolsProps = {
  pools: {
    countPools: number;
  };
};

export default function HomePage({ pools }: PoolsProps) {
  return <Home pools={pools} />;
}

export const getServerSideProps = async () => {
  const { data } = await api.get("/pools/count");
  const pools = data;

  return {
    props: {
      pools,
    },
  };
};

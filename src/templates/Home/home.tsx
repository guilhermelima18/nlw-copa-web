type PoolsProps = {
  pools: {
    countPools: number;
  };
};

export const Home = ({ pools }: PoolsProps) => {
  return <h1>Quantidade de bolões: {pools?.countPools}</h1>;
};

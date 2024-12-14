import { Box, Group, Loader } from "@mantine/core";

const loading = () => {
  return (
    <Group style={{ height: "80vh" }} justify="center">
      <Loader color="indigo.8" type="bars" />
    </Group>
  );
};
export default loading;

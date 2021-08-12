import {
  Flex,
  Box,
  FormLabel,
  Heading,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import { singuprWithEmailAndPassword } from "./firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const signup = async (e) => {
    //Submitボタンを押したらこの関数が実行される
    e.preventDefault();
    //Defaultの挙動を停止する
    //フォームのデフォルトの送信ボタンを押したときにデフォルトの挙動をprevent(防ぐ)
    //ページの再読み込み(リロードを防ぐ
    const user = await singuprWithEmailAndPassword(email, password);
    console.log("User情報 :", user);
  };

  return (
    <Flex align="center" justify="center">
      <Box>
        <Heading as="h1" fontFamily="sans-serif">
          Auth動作確認
        </Heading>

        <form onSubmit={signup}>
          <Stack>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              value={email}
              onChange={onChangeEmail}
              h={20}
              placeholder="email"
            />
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={onChangePassword}
              h={20}
              placeholder="password"
            />
            <Button
              type={"submit"}
              backgroundColor="#319795"
              color="white"
              _hover={{ color: "black", backgroundColor: "#B2F5EA" }}
            >
              登録
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}

export default App;

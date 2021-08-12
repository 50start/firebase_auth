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
import {
  singuprWithEmailAndPassword,
  singinrWithEmailAndPassword,
  signout,
} from "./firebase/auth";

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
    //auth.jsで　async await　を使っているのでここでも実装する　returnで成功したらuserが帰ってくる
    console.log("登録User情報 :", user);
  };

  const signin = async (e) => {
    e.preventDefault();
    const user = await singinrWithEmailAndPassword(email, password);
    console.log("サインインUser情報 :", user);
  };

  return (
    <Flex align="center" justify="center">
      <Box>
        <Heading as="h1" fontFamily="sans-serif">
          Auth動作確認
        </Heading>

        <Box align="center" justify="center" color="#553C9A" fontSize="medium">
          登録用フォーム
        </Box>

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

        <Box
          align="center"
          justify="center"
          color="#97266D"
          fontSize="medium"
          mt={50}
        >
          ログインフォーム
        </Box>
        <form onSubmit={signin}>
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
              ログイン
            </Button>
          </Stack>
        </form>
        <Box>
          <Stack>
            <Button
              type={"button"}
              backgroundColor="#319795"
              color="white"
              _hover={{ color: "black", backgroundColor: "#B2F5EA" }}
              mt={20}
              onClick={signout}
            >
              ログアウト
            </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;

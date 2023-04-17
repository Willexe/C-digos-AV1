import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { Colors } from "react-native/Libraries/NewAppScreen";

import Ionicons from "@expo/vector-icons/Ionicons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

import React, { useState } from "react";

export default function App() {
  const [ligar, setLigar] = useState(true);

  const [texto, setTexto] = useState("Saiba mais");

  const mudarBotao = () => {
    setLigar(!ligar);

    if (ligar == false) {
      setTexto("Saiba mais");
    } else if (ligar == true) {
      setTexto("Voltar");
    }
  };

  const [ligarregistro, setLigadoR] = useState(true);

  const [pesquisar, setPesquisar] = useState("Pesquisar");

  const Pesquisar = () => {
    setLigadoR(!ligarregistro);

    if (ligarregistro == false) {
      setPesquisar("Pesquisar");
    } else if (ligar == true) {
      setPesquisar("Voltar");
    }
  };

  const [pessoas, setPessoas] = useState([
    {
      nome: "3 Vagas disponiveis para Desenvolvedor Mobile. Empresa:Uninassau Requisitos:Estar cursando Sistema da informação 3º Periodo. Toque para saber mais",
      key: 1,
    },

    {
      nome: "5 Vagas disponiveis para Cybersecurity. Empresa:Uninassau Requisitos:Estar cursando Sistema da informação 6º Periodo. Toque para saber mais",
      key: 2,
    },

    {
      nome: "1 Vaga disponivel para Desenvolvedor Junior. Empresa:Uninassau Requisitos:Estar cursando Sistema da informação 8º Periodo. Toque para saber mais",
      key: 3,
    },

    {
      nome: "6 Vagas disponiveis para Analista de Dados. Empresa:Porto Digital Requisitos:Estar cursando Sistema da informação 2º Periodo. Toque para saber mais",
      key: 4,
    },

    {
      nome: "3 Vagas disponiveis para Desenvolvedor Mobile. Empresa:GitJob Requisitos:Estar cursando Sistema da informação 7º Periodo. Toque para saber mais",
      key: 5,
    },

    {
      nome: "2 Vagas disponiveis para Analista de Redes. Empresa:Novo Atacarejo Requisitos:Estar cursando Sistema da informação 4º Periodo. Toque para saber mais",
      key: 6,
    },

    {
      nome: "1 Vaga disponivel para Desenvolvedor Front-end . Empresa:Extra Requisitos:Estar cursando Sistema da informação 1º Periodo. Toque para saber mais",
      key: 7,
    },
  ]);

  const [nome, setInteresse] = useState("");

  const [formacao, setFormacao] = useState("");

  const [periodo, setPeriodo] = useState("");

  const apertarBotao = (key) => {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viwe1}>
        <MaterialCommunityIcons name="panda" size={50} color="black" />

        <View>
          <Text style={styles.caixaUm}>GitJob</Text>

          <Text style={styles.caixaDois}>Faça seu futuro agora</Text>
        </View>
      </View>

      <View style={styles.interesse}>
        <Text>Área de interesse:</Text>

        <TextInput
          multiline
          style={styles.input}
          placeholder="Ex: Desenvolvedor Mobile"
          onChangeText={setInteresse}
        />

        <Text>Formação:</Text>

        <TextInput
          multiline
          style={styles.input}
          placeholder="Ex: Sistema de informação"
          onChangeText={setFormacao}
        />

        <Text>Período:</Text>

        <TextInput
          keyboardType="numeric"
          multiline
          style={styles.input}
          placeholder="Ex: 3ª período"
          onChangeText={setPeriodo}
        />

        {ligarregistro ? (
          <Text></Text>
        ) : (
          <Text style={styles.perfil}>
            Área de interesse: {nome} Formação: {formacao} Periodo: {periodo}
          </Text>
        )}
      </View>

      <View style={styles.ButtonPai}>
        <View style={styles.buttonPesquisar}>
          <Button title={pesquisar} onPress={Pesquisar} color="#008867" />
        </View>
      </View>

      <View style={styles.view2}>
        {ligar ? (
          <Text style={styles.texto2}>O que é o GitJob?</Text>
        ) : (
          <Text style={styles.texto3}>
            GitJob é uma plataforma de publicações de trabalhos e requisitos
            para conseguir seu emprego. Ele permite que
            empresas/estabelecimentos/instituições/pessoas publiquem vagas de
            empregos e requisitos em tempo real para os interessados na área.
          </Text>
        )}

        <View style={styles.saibamais}>
          <Button title={texto} onPress={mudarBotao} color="#008867" />
        </View>
      </View>

      <View style={styles.Vagas}>
        <Text style={styles.VagasERequisitos}>Vagas e requisitos</Text>
      </View>

      {ligarregistro ? (
        <Text></Text>
      ) : (
        <View style={styles.Pai}>
          <View style={styles.box}>
            <FlatList
              horizontal
              numColumns={1}
              keyExtractor={(item) => item.key}
              data={pessoas}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => apertarBotao(item.key)}>
                  <Text style={styles.item}>{item.nome}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#D3D3D3",
  },

  caixaUm: {
    paddingLeft: 39,

    fontWeight: "bold",

    fontSize: 18,
  },

  caixaDois: {
    fontStyle: "italic",
  },

  texto2: {
    fontStyle: "italic",

    width: "50%",

    fontSize: 16,

    marginLeft: "3%",

    color: "black",

    paddingLeft: 10,
  },

  texto3: {
    width: 230,

    fontSize: 11,

    marginLeft: "3%",

    color: "black",
  },

  viwe1: {
    width: "100%",

    display: "flex",

    height: 80,

    marginTop: 40,

    marginBottom: 50,

    justifyContent: "space-evenly",

    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#eee",

    borderRadius: 30,
  },

  view2: {
    backgroundColor: "#eee",

    width: "96%",

    height: 90,

    borderRadius: 15,

    marginTop: 35,

    marginBottom: 10,

    marginLeft: 5,

    alignItems: "center",

    flexDirection: "row",
  },

  VagasERequisitos: {
    fontSize: 20,

    fontWeight: "bold",
  },

  Vagas: {
    alignItems: "center",

    paddingBottom: 6,
  },

  Pai: {
    flex: 1,

    justifyContent: "center",
  },

  item: {
    flex: 1,

    margin: 4,

    borderRadius: 10,

    backgroundColor: "#eee",

    width: 220,

    height: 150,

    fontSize: 17,

    fontStyle: "italic",

    paddingTop: 5,

    paddingLeft: 2,
  },

  input: {
    backgroundColor: "#eee",

    borderWidth: 1,

    borderColor: "black",

    borderRadius: 4,

    padding: 8,

    margin: 10,

    width: 270,
  },

  ButtonPai: {
    alignItems: "center",
  },

  buttonPesquisar: {
    width: "50%",

    display: "flex",

    justifyContent: "center",

    justifyContent: "space-around",

    flexDirection: "row",

    paddingTop: 5,
  },

  viewlogin: {
    alignItems: "center",
  },

  interesse: {
    alignItems: "center",
  },

  perfil: {
    fontWeight: "bold",
  },

  saibamais: {
    paddingLeft: 34,
  },
});

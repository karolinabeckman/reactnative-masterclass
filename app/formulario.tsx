import Botao from "@/components/Botao";
import styles from "@/constants/style";
import useFormUsuario from "@/hooks/useFormUsuario";
import Cpf from "@/utils/cpf";
import { Text, TextInput, View } from "react-native";

export default function TelaFormulario() {
    const { usuario, erros, setUsuario, salvar } = useFormUsuario()

    return(
        <View style={ styles.centralizado }>
            <Text>Formulário</Text>
            <TextInput 
                placeholder="Nome" 
                value={usuario.nome ?? ''}
                style={ [styles.input, erros.nome && styles.inputError] }
                onChangeText={(nome) => setUsuario({...usuario, nome})}
            />
            {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}
            <TextInput 
                placeholder="CPF" 
                value={usuario.cpf ?? ''}
                style={ styles.input }
                keyboardType="phone-pad"
                onChangeText={(cpf) => setUsuario({...usuario, cpf: Cpf.formatar(cpf)})}
            />
            <Botao onPress={salvar}>
                <Text style={{ color: '#FFF' }}>Salvar</Text>
            </Botao>
        </View>
    )
}
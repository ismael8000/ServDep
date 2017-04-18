//import {Alert} from 'react-native';
import axios from 'axios';

const baseURL  = 'https://server-desenv.cbm.df.gov.br/programadores/eulalio/gecope/public';
const config   = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'} };

export let findByVlrIdentificacaoUnica = (vlrIdentificacaoUnica) => {
    return  axios.get( `${baseURL}/dp-servidor/dados-servidor?vlr_identificacao_unica=${vlrIdentificacaoUnica}*`, config )
            .then(function(response){			
                return response.data;				  
            })		
            .catch(function(err) {
                console.error( err );
                return [];
            }); 
}

export let findByCodPessoaServidor = (codPessoaServidor) => {
    return  axios.get( `${baseURL}/dp-servidor/get-dependentes?cod_pessoa_servidor=${codPessoaServidor}`, config )
            .then(function(response){			
                return response.data;				  
            })		
            .catch(function(err) {
                console.error( err );
                return [];
            }); 
}

//[{"cod_pessoa_servidor":1657,"nom_guerra_servidor":"EUL\u00c1LIO","mat_sigrh_servidor":"063568","vlr_identificacao_unica":"1404142","img_foto_servidor":null,"cod_tipo_servidor":"MILITAR","dat_inclusao":"1993-12-08","dsc_email_corporativo_DEL":null,"cod_tipo_exclusao_servico_ativo":null,"cod_controle_status_servidor_tipo":6,"cod_pessoa":1657,"nom_completo_pessoa":"ALDENOR NUNES NEIVA EULALIO","num_cpf_pessoa":"50416588115","dat_nascimento_pessoa":"1969-11-15","nom_pai_pessoa":"AGENOR NEIVA EULALIO","nom_mae_pessoa":"MARIA LETICIA NUNES EULALIO","dsc_digital_direita_pessoa":null,"dsc_digital_esquerda_pessoa":null,"dat_casamento_pessoa":null,"cod_tipo_sanguineo":"B+","dat_ultima_atualizacao":"2010-04-08 17:22:38.087178","num_pispasep":"12460286262","cod_sexo":"MASCULINO","cod_pais_naturalidade":32,"cod_uf_naturalidade":18,"cod_localidade_naturalidade":5707,"cod_nivel_escolaridade":"ENSINO SUPERIOR","cod_religiao":5,"num_agencia":"444","num_conta_corrente":"555","cod_banco":"230","dat_status":"2017-03-20","dsc_controle_status_servidor_tipo":"Licenciamento a pedido","cod_comportamento_servidor":5060,"dat_inicial_comportamento":"2016-09-30 00:00:00","flg_situacao_comportamento":"A","str_situacao_comportamento":"Atual","flg_permissao_exclusao":false,"cod_comportamento":1,"dsc_comportamento":"Excepcional","dsc_religiao":"Evang\u00e9lica de Origem Pentecostal","cod_estado_civil":"SOLTEIRO"}];
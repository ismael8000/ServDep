import React, {Component} from 'react';
import {Alert, View, ListView, StyleSheet} from 'react-native';
import SearchBar from './SearchBar';
import ServidorListItem from './ServidorListItem';
import * as servidorService from '../services/servidor';

class ServidorList extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})};
    }

    search(vlrIdentificacaoUnica) {
        vlrIdentificacaoUnica = vlrIdentificacaoUnica.trim()
		if( vlrIdentificacaoUnica.length < 5) {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows([])
			});
	    } else {
			servidorService.findByVlrIdentificacaoUnica(vlrIdentificacaoUnica).then(servidores => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(servidores)
				});
			});
		}
    }

    render() {
        return (
            <ListView style={styles.container}
                      dataSource={this.state.dataSource}
                      enableEmptySections={true}
                      renderRow={(data) => <ServidorListItem navigator={this.props.navigator} data={data} />}
                      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                      renderHeader={() => <SearchBar onChange={this.search.bind(this)} />}
            />
        );
    }
}
export default ServidorList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 60
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#AAAAAA',
    }
});

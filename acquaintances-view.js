import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import ListBuilder from '../../coreView/common/list-builder';
import fuLogger from '../../core/common/fu-logger';

export default function AcquaintancesView({itemState, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onOrderBy, onOption,
	closeModal, inputChange, goBack, session, navigate, location}) {
	
	let activeTab = location.pathname;
	
	let columns = [];
    if (itemState.prefLabels != null && itemState.prefLabels.SOCIAL_ACQUAINTANCE_PAGE != null) {
    	columns = itemState.prefLabels.SOCIAL_ACQUAINTANCE_PAGE;
    }
    let group = "TABLE1";
    
    let header = null;
	let parent = null;
	if (itemState.parent != null) {
		parent = itemState.parent.name;
	} 
	if (itemState.prefTexts != null && itemState.prefTexts.SOCIAL_ACQUAINTANCE_PAGE != null && itemState.prefTexts.SOCIAL_ACQUAINTANCE_PAGE.SOCIAL_ACQUAINTANCE_AQUAINTANCES_HEADER != null) {
		header = itemState.prefTexts.SOCIAL_ACQUAINTANCE_PAGE.SOCIAL_ACQUAINTANCE_AQUAINTANCES_HEADER.value;
	}
	
	if (goBack != null && parent != null && parent != "") {
		// header = <span>{header} : <a onClick={() => goBack()} aria-hidden="true">{parent}</a></span>;
	}
	
	let deleteModalHeader = "Delete ";
	if (itemState.selected != null && itemState.selected.name != null) {
		deleteModalHeader += itemState.selected.name;
	}
	let pressableStyle1 = [];
	let pressableStyle2 = [];
	let pressableStyle3 = [];
	if (activeTab.includes("invites")){
		pressableStyle2.push(styles.itemActive);
	} else if (activeTab.includes("messages")){
		pressableStyle3.push(styles.itemActive);
	} else {
		pressableStyle1.push(styles.itemActive);
	}
			
	return (
		<View style={styles.container}>
			<View style={styles.items} >
				<Pressable key="1" onPress={() => navigate("/member/acquaintances/list")} style={pressableStyle1}  >
	        		<Text>Acquaintances</Text>
				</Pressable>
				<Pressable key="2" onPress={() => navigate("/member/acquaintances/invites")} style={pressableStyle2} >
	        		<Text>Invites</Text>
				</Pressable>
				<Pressable key="3" onPress={() => navigate("/member/acquaintances/messages")} style={pressableStyle3} >
	        		<Text>Messaging</Text>
				</Pressable>
			</View>
			<ListBuilder
	  	      	itemState={itemState}
	  	      	header={header}
	  	     	columns={columns}
	  	      	appPrefs={appPrefs}
	  	      	onListLimitChange={onListLimitChange}
	  	      	onSearchChange={onSearchChange}
	  	      	onSearchClick={onSearchClick}
	  	      	onPaginationClick={onPaginationClick}
	  			onOrderBy={onOrderBy}
				onOption={onOption}
				goBack={goBack}
	  	      />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 22,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
		borderWidth: 2
	},
	items: {
		flexDirection: 'row',
		backgroundColor: '#eee',
		width: '100%',
		justifyContent: 'space-evenly',
	},
	itemActive: {
		borderBottomWidth: 2
	}
});

AcquaintancesView.propTypes = {
  itemState: PropTypes.object
};

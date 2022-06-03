import React from 'react';
import PropTypes from 'prop-types';
import ListBuilder from '../../coreView/common/list-builder';
import fuLogger from '../../core/common/fu-logger';

export default function AcquaintancesView({itemState, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onOrderBy, onOption,
	closeModal, inputChange, goBack, session}) {
	
	fuLogger.log({level:'TRACE',loc:'AcquaintancesView::itemState',msg:JSON.stringify(itemState)});
	
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
	
	return (
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
	);
}

AcquaintancesView.propTypes = {
  itemState: PropTypes.object
};

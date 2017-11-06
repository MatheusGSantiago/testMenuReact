import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete';

class AutoCompleteInput extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchText: '',
          }
    }
   
    
      handleUpdateInput = (searchText) => {
        this.setState({
          searchText: searchText,
        });
      };
    
      onNewRequest(chosen, index) {

        console.log(chosen, index)

      }
    render() {
        const {
            hintText,
            items,
            menuProps,
            config,
            minLength
        } = this.props
        return(
            <div>
                <AutoComplete
                hintText={hintText}
                searchText={ this.state.searchText }
                filter={(s, k) => s.length >= 2 && AutoComplete.caseInsensitiveFilter(s, k)}
                dataSource={ items }
                dataSourceConfig={ {text: 'name', value: 'route'}  }
                onNewRequest={ this.onNewRequest.bind(this) }
                onUpdateInput={this.handleUpdateInput.bind(this)}
                openOnFocus={false} />
            </div>
        )
    }
}

export default AutoCompleteInput
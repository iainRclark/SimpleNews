import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';

class Filters extends Component {
    state = {
        filters: {
            search: '',
            category: '',
            language: 'en',
            country: 'us'
        }
    }

    onChange = (e) => {
        const { name, value } = e.target;
        var filters = {...this.state.filters}
        filters[name] = value;

        this.setState({filters});
        this.props.onFilterChange(filters);
    }

    render() {
        return (
            <form className="filters p-2 bg-slate-700">
                <DebounceInput 
                    name="search"
                    minLength={0}
                    debounceTimeout={400}
                    type="text" 
                    placeholder="Search..." 
                    className="filter-item"
                    onChange={this.onChange} 
                    value={this.state.filters.search}>
                </DebounceInput>

                <select className="filter-item" onChange={this.onChange} name="category" value={this.state.filters.category}>
                    <option value="">--Category--</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technologies</option>
                </select>

                <select className="filter-item" onChange={this.onChange} name="country" value={this.state.filters.country}>
                    <option value="">--Country--</option>
                    <option value="ae">Avestan</option>
                    <option value="ar">Arabic</option>
                    <option value="at">Austria</option>
                    <option value="au">Australia</option>
                    <option value="be">Belgium</option>
                    <option value="bg">Bulgaria</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="ch">Switzerland</option>
                    <option value="cn">China</option>
                    <option value="co">Colombia</option>
                    <option value="cu">Cuba</option>
                    <option value="cz">Czechia</option>
                    <option value="de">Germany</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="gb">United Kingdom</option>
                    <option value="gr">Greece</option>
                    <option value="hk">Hong Kong</option>
                    <option value="hu">Hungary</option>
                    <option value="id">Indonesia</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="in">India</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="kr">Korea</option>
                    <option value="lt">Lithuania</option>
                    <option value="lv">Latvia</option>
                    <option value="ma">Morocco</option>
                    <option value="mx">Mexico</option>
                    <option value="my">Malaysia</option>
                    <option value="ng">Nigeria</option>
                    <option value="nl">Netherlands</option>
                    <option value="no">Norway</option>
                    <option value="nz">New Zealand</option>
                    <option value="ph">Philippines</option>
                    <option value="pl">Poland</option>
                    <option value="pt">Portugal</option>
                    <option value="ro">Romania</option>
                    <option value="rs">Serbia</option>
                    <option value="ru">Russia</option>
                    <option value="sa">Saudi Arabia</option>
                    <option value="se">Sweden</option>
                    <option value="sg">Singapore</option>
                    <option value="si">Slovenia</option>
                    <option value="sk">Slovakia</option>
                    <option value="th">Thailand</option>
                    <option value="tr">Turkey</option>
                    <option value="tw">Taiwan</option>
                    <option value="ua">Ukraine</option>
                    <option value="us">United States</option>
                    <option value="ve">Venezuela</option>
                    <option value="za">South Africa</option>
                </select>

                <select className="filter-item" onChange={this.onChange} name="language" value={this.state.filters.language}>
                    <option value="">--Language--</option>
                    <option value="ar">Arabic</option>
                    <option value="de">German</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="he">Hebrew</option>
                    <option value="it">Italian</option>
                    <option value="nl">Dutch</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portuguese</option>
                    <option value="ru">Russian</option>
                    <option value="se">Northern Sami</option>
                    <option value="ud">Sudanese</option>
                    <option value="zh">Chinese</option>
                </select>
            </form>
            )
    }
}

Filters.propTypes = {
    onFilterChange: PropTypes.func.isRequired
}

export default Filters;

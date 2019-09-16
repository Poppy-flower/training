import React from 'react';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import './timeTable.css';
import InputCell from '../inputCell/inputCell.js';

//不能非空的项
const NOTEMPTYRULES = ['line', 'startTime', 'spaceTime', 'toXiaoMing', 'toCompany', 'running', 'stopTime'];

//小明到公交站的时间输入正则匹配规则
const LEAVETIMEREG = new RegExp(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/);

//所有表格的输入正则匹配规则
const CELLRULES = {
    'line': new RegExp(/^[0-9]*$/),
    'startTime': new RegExp(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/),
    'spaceTime': new RegExp(/^([0-5][0-9]):([0-5][0-9])$/),
    'toXiaoMing': new RegExp(/^[0-9]*$/),
    'toCompany': new RegExp(/^[0-9]*$/),
    'running': new RegExp(/^([0-5][0-9]):([0-5][0-9])$/),
    'stopTime': new RegExp(/^([0-5][0-9]):([0-5][0-9])$/),
};

class TimeTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                    title: '序号',
                    dataIndex: 'key',
                    key: 'key',
                    render: (text, record, index) => {
                        return <span>{index + 1}</span>//索引从零开始，所以第一行为index+1，index为render方法里面的参数
                    },
                },
                {
                    title: '公交线路',
                    key: 'line',
                    dataIndex: 'line',
                    render: (text, record, index) => (
                        <InputCell
                            value={text}
                            type='line'
                            onChange={this.onCellChange(index, 'line')}
                        />
                    )
                }, {
                    title: '开始运营时间（时:分）',
                    key: 'startTime',
                    dataIndex: 'startTime',
                    render: (text, record, index) => (
                        <InputCell
                            value={text}
                            type='startTime'
                            onChange={this.onCellChange(index, 'startTime')}
                        />
                    )
                }, {
                    title: '发车间隔时间（分:秒）',
                    key: 'spaceTime',
                    dataIndex: 'spaceTime',
                    render: (text, record, index) => (
                        <InputCell
                            value={text}
                            type='spaceTime'
                            onChange={this.onCellChange(index, 'spaceTime')}
                        />
                    )
                }, {
                    title: '始发->小明家几站',
                    key: 'toXiaoMing',
                    dataIndex: 'toXiaoMing',
                    render: (text, record, index) => (
                        <InputCell
                            value={text}
                            type='toXiaoMing'
                            onChange={this.onCellChange(index, 'toXiaoMing')}
                        />
                    )
                },{
                    title: '小明家->公司几站',
                    key: 'toCompany',
                    dataIndex: 'toCompany',
                    render: (text, record, index) => (
                        <InputCell
                            value={text}
                            type='toCompany'
                            onChange={this.onCellChange(index, 'toCompany')}
                        />
                    )
                },{
                    title: '每站行驶时间(分:秒)',
                    key: 'running',
                    dataIndex: 'running',
                    render: (text, record, index) => (
                        <InputCell
                            value={text}
                            type='running'
                            onChange={this.onCellChange(index, 'running')}
                        />
                    )
                },{
                    title: '停留时间(分:秒)',
                    key: 'stopTime',
                    dataIndex: 'stopTime',
                    render: (text, record, index) => (
                        <InputCell
                            value={text}
                            type='stopTime'
                            onChange={this.onCellChange(index, 'stopTime')}
                        />
                    )
                },{
                    title: '删除',
                    key: 'action',
                    dataIndex: 'action',
                    render: (text, record, index)=>(
                        <span data-index={index} onClick={(e)=>this.handleDeleteLine(e)}>delete</span>
                    )
                }
            ],
            renderDate: [
                {
                    key: 0,
                    line: '1',
                    startTime: '06:00',
                    spaceTime: '20:00',
                    toXiaoMing: '4',
                    toCompany: '3',
                    running: '02:00',
                    stopTime: '01:00'
                }, {
                    key: 1,
                    line: '2',
                    startTime: '05:00',
                    spaceTime: '20:00',
                    toXiaoMing: '4',
                    toCompany: '3',
                    running: '02:00',
                    stopTime: '01:00'

                }, {
                    key: 2,
                    line: '3',
                    startTime: '06:30',
                    spaceTime: '20:00',
                    toXiaoMing: '4',
                    toCompany: '3',
                    running: '02:00',
                    stopTime: '01:00'
                }], //初始render的值
            leaveTime: '08:00:00',
            displayLeaveTime: '08:00:00',
            shortestData: {
                line: '1',
                startTime: '11',
                spaceTime: '11',
                toXiaoMing: '11',
                toCompany: '11',
                running: '11',
                stopTime: '11'
            },  //最短数据
            count: 2,
        };
    }

    /**
     * func 新增公交
     */
    handleAddLine(){
        const newrenderDate = [...this.state.renderDate];
        const {count} = this.state;
        newrenderDate.push({
            key: count+1,
            line: '',
            startTime: '',
            spaceTime: '',
            toXiaoMing: '',
            toCompany: '',
            running: '',
            stopTime: ''
        });

        this.setState({
            count: count+1,
            renderDate: newrenderDate
        });
    }

    /**
     * func 删除公交
     */
    handleDeleteLine(e){
        var newrenderData = [...this.state.renderDate];
        newrenderData.splice(e.target.getAttribute('data-index')-0,1);
        this.setState({
            renderDate: newrenderData
        })
    }

    /**
     * func 改变单元格数值
     */
    onCellChange(index, name){
        var _this = this;
        return (value)=> {
            const newrenderData = [...this.state.renderDate];
            if (value.match(CELLRULES[name])) {
                newrenderData[index][name] = value;
                this.setState({
                    renderDate: newrenderData
                })
            } else {
                alert('您输入的格式不正确，请重新输入！');
                return;
            }
            _this.getShortestData();
        }
    }

    /**
     * func 小明输入离开家到公交站的时间
     */
    handleChangeDisplayLeaveTime(e){
        const value = e.target.value;
        this.setState({
            displayLeaveTime: value
        });
    }

    /**
     * func 点击确定 ，确定离开家到公交站的时间
     */
    handleCheckLeaveHome(){
        const {displayLeaveTime} = this.state;

        if(displayLeaveTime.match(LEAVETIMEREG)){
            this.setState({
                leaveTime: displayLeaveTime,
            },function(){
                this.getShortestData();
            });
        }else{
            alert('不符合时分秒的格式，请重新输入小明到公交站的时间！');
        }
    }

    /**
     * func 获取最短公交
     */
    getShortestData(){
        /**
         * 解题思路：
         *  注意：  单位统一成小时    分钟
         *  1. 判断能够参加比较的所有项非空的对象 ,push ---> compareDate
         *  2. 等待时间 t1分钟
         *      2.1  求最早的公交到小明家需要多少分钟 ，放在 firstToHome 字段
         *
         *      2.2  判断最早的到没到？  hasArrive
         *           最早到的时间 <  小明到的时间
         *           如果最早的没到
         *           等待时间t1 = 最早的到小明家的时间firstToHome - 小明到的时间
         *      2.3  如果最早的车已经过了  就是还
         *           等待时间t1 = 下一辆到小明家的时间 - 小明到的时间
         *
         *  3. 计算小明家到公司需要的时间 t2分钟
         *      3.1  站数 * （行驶时间+停留时间）-1个停留时间  toCompanyNeeds
         *
         *  4. 到公司需要的时间 t3 = t1 + t2
         *  5. t3 最小的公交信息  --->  shortestData:{}
         */
        var compareDate = this.getCompareDate();
        compareDate = this.changehasArrive(compareDate);  //新增是否经过家、到公司几分钟、第一个车到家几点、每段行驶加停几分钟
        compareDate = this.getWait(compareDate);  //计算每个车需要的等待时间
        compareDate = this.getAllNeedsTime(compareDate);  //计算等待时间+ 路上用时
        this.getShortestLine(compareDate);
    }

    /**
     * func  得到最短路线
     * @param compareDate
     */
    getShortestLine(compareDate){
        var compare = function(obj1, obj2){
            var val1 = obj1.allNeeds;
            var val2 = obj2.allNeeds;
            if(val1 < val2){
                return -1;
            }else if(val1 > val2){
                return 1;
            }else{
                return 0;
            }
        }
        this.setState({
            shortestData: compareDate.sort(compare)[0],
        })
    }

    /**
     * func  计算总共用时
     * @param compareDate
     */
    getAllNeedsTime(compareDate){
        compareDate.map((item,index)=>{
            item.allNeeds = item.wait + item.toCompanyNeeds;
        })
        return compareDate;
    }

    /**
     * func   计算每个公交的等待时间
     * @param compareDate
     */
    getWait(compareDate){
        const {leaveTime} = this.state;
        var wait = 0;  //等待时间： 分钟
        compareDate.map((item, index)=>{
            if(item.hasArrive){
                //计算已经到达的车辆需要的等待时间
                var {firstToXiaoMing, eachTime, spaceTime} = item;
                var getArrivedWaitTimeParams = {
                    firstToXiaoMing: firstToXiaoMing,
                    leaveTime: leaveTime,
                    eachTime: eachTime,
                    spaceTime: spaceTime
                }
                wait = this.getArrivedWaitTime(getArrivedWaitTimeParams);
                item.wait = wait;
            }else{
                var {firstToXiaoMing} = item;
                wait = this.getWaitTime(firstToXiaoMing, leaveTime);
                item.wait = wait;
            }
        });
        return compareDate;
    }

    getArrivedWaitTime(getArrivedWaitTimeParams){
        var {firstToXiaoMing, leaveTime, eachTime, spaceTime} = getArrivedWaitTimeParams;
        var leaveTimeArr = leaveTime.split(':');
        var firstToXiaoMingArr = firstToXiaoMing.split(':');
        var hasGoneTime = ((leaveTimeArr[0]-0)-(firstToXiaoMingArr[0]-0))*60 +
            ((leaveTimeArr[1]-0)-(firstToXiaoMingArr[1]-0)) +
            parseInt(((leaveTimeArr[2]-0)-(firstToXiaoMingArr[2]-0))/60);
        var space = (spaceTime.split(':')[0]-0) +((spaceTime.split(':')[1]-0)/60);
        var hasGoneBus = hasGoneTime/space;
        var wait = (Math.ceil(hasGoneBus)-hasGoneBus) * space;
        return wait;
    }

    /**
     * func  得到需要等几分钟
     * @param firstToXiaoMing  晚的时间
     * @param leaveTime   早的时间
     */
    getWaitTime(firstToXiaoMing, leaveTime){
        var leaveTimeArr = leaveTime.split(':');
        var firstToXiaoMingArr = firstToXiaoMing.split(':');
        var wait = ((firstToXiaoMingArr[0]-0)-(leaveTimeArr[0]-0))*60 +
            ((firstToXiaoMingArr[1]-0)-(leaveTimeArr[1]-0)) +
            parseInt(((firstToXiaoMingArr[2]-0)-(leaveTimeArr[2]-0))/60);
        return wait;
    }

    /**
     * func  计算每辆车在小明到之前是否有车已经经过小明加了
     * add: eachTime
     *      toCompanyNeeds
     *      firstToXiaoMing
     *      hasArrive
     * @param compareDate
     */
    changehasArrive(compareDate){
        const {leaveTime} = this.state;
        compareDate.map((item, index)=>{
            var {startTime, running, stopTime, toXiaoMing, toCompany} = item;

            var eachTime = ((running.split(':')[0]-0)+(running.split(':')[1]-0)/60) +
                ((stopTime.split(':')[0]-0)+(stopTime.split(':')[1]-0)/60);    //每段行驶加停需要的时间：分钟
            item.eachTime = eachTime;

            var firstToXiaoMingNeedTime = toXiaoMing * eachTime;   //第一辆车到小明家需要多长时间：分钟

            var stop = (stopTime.split(':')[0]-0)+(stopTime.split(':')[1]-0)/60;
            var toCompanyNeeds = toCompany * eachTime - stop;
            item.toCompanyNeeds = toCompanyNeeds;   //小明从家到公司路上花费几分钟：  分钟

            var firstToXiaoMing = '';    //第一辆车到小明家几点
            firstToXiaoMing = `${startTime.split(':')[0]}:${(startTime.split(':')[1]-0) + parseInt(firstToXiaoMingNeedTime)}:${(firstToXiaoMingNeedTime%1)*60}`;  //第一辆车到小明家的时间点 时：分：秒
            firstToXiaoMing = this.format(firstToXiaoMing);
            item.firstToXiaoMing = firstToXiaoMing;

            //第一班车是否经过了小明家
            var hasArrive = this.isHasArrive(leaveTime, firstToXiaoMing);
            item.hasArrive = hasArrive;
        });
        return compareDate;
    }

    /**
     * func 判断第一班车是否经过了
     * @param leaveTime
     * @param firstToXiaoMing
     * @return flag
     */
    isHasArrive(leaveTime, firstToXiaoMing){
        var leaveTimeArr = leaveTime.split(':');
        var firstToXiaoMingArr = firstToXiaoMing.split(':');

        if(leaveTimeArr[0] < firstToXiaoMingArr[0]){
            return true;
        }else if(leaveTimeArr[1] < firstToXiaoMingArr[1]){
            return true;
        }else if(leaveTimeArr[2] < firstToXiaoMingArr[2]){
            return true;
        }else{
            return false;
        }
    }

    /**
     * func 格式化时间  时：分：秒
     * @param time
     * @return string
     */
    format(time){
        var timeArr = time.split(':');
        timeArr[2] = (timeArr[2]-0)%60;
        timeArr[1] = (timeArr[1]-0) + parseInt((timeArr[2]-0)/60);
        timeArr[0] = (timeArr[0]-0) + parseInt((timeArr[1]-0)/60);
        return timeArr.join(':');
    }

    /**
     * func 得到每项均不空能参加比较的数组
     * @returns {Array}
     */
    getCompareDate(){
        var compareDate = [];
        const allrenderData = [...this.state.renderDate];
        allrenderData.map((item, index)=>{
            var flag = true;
            for(var i=0;i<NOTEMPTYRULES.length;i++){
                if(item[NOTEMPTYRULES[i]] === ''){
                    flag = false;
                }
            }
            //满足每一项都不空，将item 放进比较数组里面
            if(flag){
                return compareDate.push(item);
            }else{
                return;
            }
        });
        return compareDate;
    }

    componentDidMount(){
        this.getShortestData();
    }

    render(){
        var {columns, renderDate, displayLeaveTime, shortestData} = this.state;

        return (
            <div className='timeTable'>
                <div className='head'>
                    <div className="add-line" onClick={()=>this.handleAddLine()}>新增公交线路</div>
                    <div className="leave-input">请输入小明到公交站的时间（时:分:秒，例如: 10:00:00）：
                        <input
                            value={displayLeaveTime}
                            className="to-bus-station"
                            type="text"
                            onChange={(e)=>this.handleChangeDisplayLeaveTime(e)}
                        />
                        <span
                            className="leave-home"
                            onClick={()=>this.handleCheckLeaveHome()}
                        >
                            确定
                        </span>
                    </div>
                </div>
                <Table
                    bordered
                    className="bus-table"
                    columns={columns}
                    dataSource={renderDate}
                />
                <div className='shortestLine'>
                    最佳线路{shortestData.line}经过{shortestData.toXiaoMing}站到小明家，再经过{shortestData.toCompany}站，
                    每站行驶{shortestData.spaceTime}分钟,每站停留{shortestData.stopTime}分钟到小明公司.
                </div>
            </div>
        )
    }
}

export default TimeTable
function Display(props) {
    let display
    if (props.bounty.name) {
        display = (
            <div className='showBounty'>
                <h2>{props.bounty.name}</h2>
                <h2>Wanted For: {props.bounty.wantedFor}</h2>
                <p>Last Seen: {props.bounty.lastSeen ? props.bounty.lastSeen : 'Unknown'}</p>
            </div>
        )
    } else {
        display = (<p>Click "more' to see more about a bounty</p>)
    }
    return (<>{display}</>)
}

export default Display
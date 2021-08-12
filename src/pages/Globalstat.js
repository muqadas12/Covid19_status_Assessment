import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import { Card } from 'antd';


function Globalstat ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2 style={{fontWeight:'bold'}}>Covid-19 Status Country Wise</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => 
          
          <p >
              <Card title={user.country}  style={{ width: 300,marginLeft:'360px',flexDirection:'row',marginTop:'10px'}}>
      <p>Cases: {user.cases} </p>
      <p>Recovered:{user.recovered}</p>
      <p>Deaths:{user.deaths}</p>
      <img src={user.countryInfo.flag}/>  
        </Card>
              
             </p>
         

          
          
          )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Globalstat)

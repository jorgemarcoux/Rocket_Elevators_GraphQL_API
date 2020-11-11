# Get an intervention by intervention ID

```javascript
query {
  byInterventionId(id: 1) {
    building {
      address {
        fullAddress
      }
      buildingDetails {
        informationKey
        value
      }
    }

    employee{
      function
      employeeName
      employeeContactInfo
    }
    interventionStartDateTime
    interventionEndDateTime
    status
    result
    report
  }
}

```

# Get all interventions for a specific building by ID

```javascript
query {
  byBuildingId(id: 1) {
    address {
      fullAddress
    }
    customer {
      companyName
      user {
        fullName
        email
      }
    }
    adminContact {
      employeeName
      employeeContactInfo
    }
    technicalContact {
      employeeName
      employeeContactInfo
    }
    buildingDetails{
      informationKey
      value
    }

    batteries {
      id
      dateOfLastInspection
      interventions {
        interventionStartDateTime
        interventionEndDateTime
        report
        status
        result
      }
      columns {
        id
        numberOfFloorsServed
        interventions {
          interventionStartDateTime
          interventionEndDateTime
          report
          status
          result
        }
        elevators {
          id
          dateOfLastInspection
          serialNumber
          interventions {
            interventionStartDateTime
            interventionEndDateTime
            report
            status
            result
          }
        }
      }
    }
  }
}
```

# Get all interventions for a specific employee

```javascript
query{
  byEmployeeId(id: 1){
    function
    employeeName
    employeeContactInfo
    interventions{
      id
      interventionStartDateTime
      interventionEndDateTime
      building{
        address{
          fullAddress
        }
        buildingDetails
      {
        informationKey
        value
      }
      }
    }
  }
}

```
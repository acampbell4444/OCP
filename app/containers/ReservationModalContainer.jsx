import React, { Component } from 'react'
import ReservationModal from '../components/ReservationModal'
import { connect } from 'react-redux'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const ReservationModalContainer = connect(mapStateToProps, mapDispatchToProps)(ReservationModal)

export default ReservationModalContainer
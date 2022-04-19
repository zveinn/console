// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package admin_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// ListNodesOKCode is the HTTP code returned for type ListNodesOK
const ListNodesOKCode int = 200

/*ListNodesOK A successful response.

swagger:response listNodesOK
*/
type ListNodesOK struct {

	/*
	  In: Body
	*/
	Payload []string `json:"body,omitempty"`
}

// NewListNodesOK creates ListNodesOK with default headers values
func NewListNodesOK() *ListNodesOK {

	return &ListNodesOK{}
}

// WithPayload adds the payload to the list nodes o k response
func (o *ListNodesOK) WithPayload(payload []string) *ListNodesOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list nodes o k response
func (o *ListNodesOK) SetPayload(payload []string) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListNodesOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty array
		payload = make([]string, 0, 50)
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*ListNodesDefault Generic error response.

swagger:response listNodesDefault
*/
type ListNodesDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewListNodesDefault creates ListNodesDefault with default headers values
func NewListNodesDefault(code int) *ListNodesDefault {
	if code <= 0 {
		code = 500
	}

	return &ListNodesDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the list nodes default response
func (o *ListNodesDefault) WithStatusCode(code int) *ListNodesDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the list nodes default response
func (o *ListNodesDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the list nodes default response
func (o *ListNodesDefault) WithPayload(payload *models.Error) *ListNodesDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list nodes default response
func (o *ListNodesDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListNodesDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
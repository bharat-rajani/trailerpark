package main

import (
	"fmt"
	"net/http"

	"github.com/bharat-rajani/trailerpark/api/pkg/api"
	spinhttp "github.com/fermyon/spin-go-sdk/http"
	"github.com/sirupsen/logrus"
)

func init() {
	spinhttp.Handle(func(w http.ResponseWriter, r *http.Request) {
		logrus.Infof("starting handle of %s", r.URL.Path)
		s, err := api.New()
		if err != nil {
			fmt.Printf("ERROR: %v\n", err)
			http.Error(w, "internal server error", http.StatusInternalServerError)
			return
		}

		s.Router.ServeHTTP(w, r)
	})
}

func main() {}

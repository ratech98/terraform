provider "google" {
  project = "jagopos" # Replace with your project ID
  region  = "us-central1"      # Replace with your preferred region
}

resource "google_compute_instance" "prod_instance" {
  name         = "prod-instance"
  machine_type = "e2-medium"
  zone         = "us-central1-b"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-10" # Change as needed
    }
  }

  network_interface {
    network = "default"
    access_config {
      // Ephemeral IP
    }
  }
}

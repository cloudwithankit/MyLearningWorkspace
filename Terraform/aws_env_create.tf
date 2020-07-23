
# resource "aws_instance" "example" {
#   ami           = "ami-2757f631"
#   instance_type = "t2.micro"
#   tags = {
#       Name = "created from terraform"
# }
# }

# resource "aws_instance" "example2" {
#   ami           = "ami-2757f631"
#   instance_type = "t2.micro"
#   tags = {
#       Name = "created from terraform v2"
# }
# }

# Configure the AWS Provider
provider "aws" {
  version    = "~> 2.0"
  secret_key = ""  /gsg
  access_key = ""

  region = "us-east-1"
}

resource "aws_vpc" "main" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "default"

  tags = {
    Name = "MainVPC"
  }
}


resource "aws_subnet" "PrivateSubnet" {
  vpc_id     = "${aws_vpc.main.id}"
  cidr_block = var.var_subnet[1].cidr

  tags = {
    Name = var.var_subnet[1].name
  }
}

variable "var_subnet" {
  # type        = string
  description = "provide cidr range for subent "
  # default ="10.0.6.0/24"

}


resource "aws_subnet" "PublicSubnet" {
  vpc_id = "${aws_vpc.main.id}"
  # cidr_block = "10.0.2.0/24"
  # cidr_block = "10.0.2.0/24"
  cidr_block = var.var_subnet[0].cidr

  tags = {
    Name = var.var_subnet[0].name
  }
}


output "AutomationMatrix" {

  value = aws_subnet.PublicSubnet.owner_id

}

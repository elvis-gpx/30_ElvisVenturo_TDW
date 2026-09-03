from flask import Blueprint, render_template

# Aquí defines la variable 'main'
main = Blueprint("main", __name__)

@main.route("/")
def home():
    return render_template("base.html")

@main.route("/carrusel")
def carrusel():
    return render_template("carrusel_slider/carrusel.html")
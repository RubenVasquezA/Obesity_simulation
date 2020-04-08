from flask import Flask, render_template,json, request,Markup
import json
from metodos_numericos import *
from metodos_numericos_c import * #metodos_numericos_c
import matplotlib.pyplot as plt
import plotly.tools as tls
from plotly.offline import *
from plotly.graph_objs import *


app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')


@app.route('/examen')
def examen():
    return render_template('examen.html')

@app.route('/metodos',methods=['POST'])
def metodos():
    _id= str(request.form['id'])
    _p = float(request.form['p'])
    _q = float(request.form['q'])
    _apha = float(request.form['apha'])
    _gm = float(request.form['gm'])
    _bt = float(request.form['bt'])
    _m1 = float(request.form['m1'])
    _m2 = float(request.form['m2'])
    _u = float(request.form['V0'])
    _h1 = float(request.form['W0'])
    _h2 = float(request.form['X0'])
    _o1 = float(request.form['Y0'])
    _o2 = float(request.form['Z0'])
    _b = float(request.form['b'])
    #################################
    _r =_m2-_m1
    _T=_u+_h1+_h2+_o1+_o2
    _u=round(_u/_T,3)
    _h1=round(_h1/_T,3)
    _h2=round(_h2/_T,3)
    _o1=round(_o1/_T,3)
    _o2=round(_o2/_T,3)
    _apha_n=round(_apha/_r,3)
    _bt_n=round(_bt/_r,3)
    _gm_n=round(_gm/_r,3)
    ##################################
    _n = int(request.form['n'])
    if(_id=='1'):
        resultado=RK13(_u,_h1,_h2,_o1,_o2,_apha,_gm,_bt,_p,_q,_m1,_m2,_b,_n,_id)
        j=json.dumps(resultado[6])
        return j
    else:
        resultado=RK44(_u,_h1,_h2,_o1,_o2,_apha_n,_gm_n,_bt_n,_b,_n,_id)
        j=json.dumps(resultado[6])
        return j


@app.route('/grafica',methods=['POST'])
def grafica():
    _id= str(request.form['id'])
    _id_gr=str(request.form['id_gr'])
    _p = float(request.form['p'])
    _q = float(request.form['q'])
    _apha = float(request.form['apha'])
    _gm = float(request.form['gm'])
    _bt = float(request.form['bt'])
    _m1 = float(request.form['m1'])
    _m2 = float(request.form['m2'])
    _u = float(request.form['V0'])
    _h1 = float(request.form['W0'])
    _h2 = float(request.form['X0'])
    _o1 = float(request.form['Y0'])
    _o2 = float(request.form['Z0'])
    _b = float(request.form['b'])
    #################################
    _r = _m2-_m1
    _T= _u+_h1+_h2+_o1+_o2
    _u= _u/_T
    _h1= _h1/_T
    _h2= _h2/_T
    _o1= _o1/_T
    _o2= _o2/_T
    _apha_n= _apha/_r
    _bt_n= _bt/_r
    _gm_n=_gm/_r
    ##################################
    _n = int(request.form['n'])

    if(_id=='1'):
        resultado=RK13(_u,_h1,_h2,_o1,_o2,_apha,_gm,_bt,_p,_q,_m1,_m2,_b,_n,_id)
    else:
        resultado=RK44(_u,_h1,_h2,_o1,_o2,_apha_n,_gm_n,_bt_n,_b,_n,_id)
        ###############
        ph=resultado[7]
        qh=resultado[8]
        ###############
    t=resultado[0]
    V=resultado[1]
    W=resultado[2]
    X=resultado[3]
    Y=resultado[4]
    Z=resultado[5]

    #todo este codigo sirve para plotear en python...
    if(_id_gr=='1'):
        fig = plt.gcf()
        ax = plt.subplot()
        ax.plot(t, V,'-r', label='Uaa')
        ax.plot(t, W,'-b', label='HAA')
        ax.plot(t, X,'-k', label='HAa')
        ax.plot(t, Y,'-g', label='OAA')
        ax.plot(t, Z,'-y', label='OAa')
        plotly_fig = tls.mpl_to_plotly( fig )
        plotly_fig['layout']['showlegend'] = True
        plotly_fig['layout']['legend'] = {}
        plotly_fig['layout']['legend'].update({'x':0.0, 'y':-0.3, 'borderwidth':1, 'bgcolor':'rgb(217,217,217)'})
        my_plot_div=plot(plotly_fig,output_type='div')
        grafica=str(my_plot_div)
        return json.dumps(grafica)

    if(_id_gr=='2'):
        fig = plt.gcf()
        ax = plt.subplot()
        ax.plot(W, Y,'-b', label='HAA vs OAA')
        plotly_fig = tls.mpl_to_plotly( fig )
        plotly_fig['layout']['showlegend'] = True
        plotly_fig['layout']['legend'] = {}
        plotly_fig['layout']['legend'].update({'x':0.0, 'y':-0.3, 'borderwidth':1, 'bgcolor':'rgb(217,217,217)'})
        my_plot_div=plot(plotly_fig,output_type='div')
        grafica=str(my_plot_div)
        return json.dumps(grafica)

    if(_id_gr=='3'):
        fig = plt.gcf()
        ax = plt.subplot()
        ax.plot(X, Z,'-b', label='HAa vs OAa')
        plotly_fig = tls.mpl_to_plotly( fig )
        plotly_fig['layout']['showlegend'] = True
        plotly_fig['layout']['legend'] = {}
        plotly_fig['layout']['legend'].update({'x':0.0, 'y':-0.3, 'borderwidth':1, 'bgcolor':'rgb(217,217,217)'})
        my_plot_div=plot(plotly_fig,output_type='div')
        grafica=str(my_plot_div)
        return json.dumps(grafica)

    if(_id_gr=='4'):
        fig = plt.gcf()
        ax = plt.subplot()
        ax.plot(t, ph,'-r', label='p')
        ax.plot(t, qh,'-b', label='q')
        plotly_fig = tls.mpl_to_plotly( fig )
        plotly_fig['layout']['showlegend'] = True
        plotly_fig['layout']['legend'] = {}
        plotly_fig['layout']['legend'].update({'x':0.0, 'y':-0.3, 'borderwidth':1, 'bgcolor':'rgb(217,217,217)'})
        my_plot_div=plot(plotly_fig,output_type='div')
        grafica=str(my_plot_div)
        return json.dumps(grafica)



if __name__ == "__main__":
    app.run(debug=True)
